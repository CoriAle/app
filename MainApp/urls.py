from django.conf.urls import url, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from MainApp import views
from rest_framework_expiring_authtoken import views as viewsauth

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
# region caja
router.register(r'cajas', views.CajaViewSet)
router.register(r'cierrecaja', views.CierreCajaViewSet)
# endregion
router.register(r'combos', views.ComboViewSet)
router.register(r'mesas', views.MesaViewSet)
router.register(r'personas', views.PersonaViewSet)
router.register(r'presentaciones', views.PresentacionViewSet)
# region bodega
router.register(r'productos', views.ProductoViewSet)  # Bodega
# endregion
router.register(r'tiposdepositosretiros', views.TipoDepositoRetiroViewSet)
router.register(r'tipospersonas', views.TipoPersonaViewSet)
router.register(r'tiposproductos', views.TipoProductoViewSet)
router.register(r'pedidoscocina', views.PedidoCocinaViewSet)
router.register(r'bailes', views.BaileViewSet)  # movil
router.register(r'bailespersona', views.BailePersonaViewSet)
router.register(r'productospresentaciones', views.ProductoPresentacionViewSet)
router.register(r'planilla', views.PlanillaViewSet, "planilla")
router.register(r'cuenta', views.CuentaViewSet, "cuentas")
router.register(r'depositoretiro', views.DepositoRetiroViewSet,"depositoretiro")
router.register(r'formapago', views.FormaPagoViewSet,"formapago")
router.register(r'personacuenta', views.PersonaCuentaViewSet,"personacuenta")
router.register(r'personaquery', views.PersonaQueryViewSet,"personaquery")
router.register(r'empresacuenta', views.EmpresaCuentaViewSet,"empresacuenta")
router.register(r'presentacionesproducto', views.PresentacionProductoViewSet,"presentacionesproducto")

# movimientos
router.register(r'movimientos', views.MovimientoViewSet)
router.register(r'movimientosmovil', views.MovimientoMovilViewSet)  # movil
router.register(r'detallemovimiento', views.DetalleMovimientoViewSet, "detallemovimiento")

# pagos
router.register(r'pagos', views.PagoViewSet)
router.register(r'pagos_personal', views.PagoPersonalViewSet)


#perfil de Usuarios
router.register(r'perfilesusuarios', views.PerfilUsuarioViewSet)

#Configuracion
router.register(r'configuracion', views.ConfiguracionViewSet)
router.register(r'impresoras', views.ImpresoraViewSet, "impresoras")

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # url(r'^token/', obtain_auth_token, name='api-token'),
    url(r'^token/', viewsauth.obtain_expiring_auth_token),
    url(r'^', include(router.urls)),
]
