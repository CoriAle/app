from fabric.api import *

env.key_filename = '~/.ssh/id_rsa'
virtualenv = 'bar'
django_project = 'Bar'

def prod():
    env.hosts = ['barapp@13.89.55.228:8822']
    env.app_dir = '~/www/bar/app'
    env.branch = 'master'

def test():
    env.hosts = ['apps@192.155.94.113']
    env.app_dir = '~/apps/bar/app'
    env.branch = 'devel'

def deploy():
    with cd(env.app_dir):
        run('git reset --hard')
        run('git checkout {branch}'.format(branch=env.branch))
        run('git pull')

        # frontend
        with cd('Frontend/master'):
            run('npm install')
            run('bower install')
            run('gulp build --usesass')

        # backend
        with prefix('source /etc/bash_completion.d/virtualenvwrapper'):
            with prefix('workon {virtualenv}'.format(virtualenv=virtualenv)):
                run('pip install --upgrade -r requirements.txt')
                run('python manage.py migrate')
                run('python manage.py collectstatic --noinput')
                run('touch {proj}/local_settings.py'.format(proj=django_project))

