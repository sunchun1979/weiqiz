using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WeiqiUX.Startup))]
namespace WeiqiUX
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
