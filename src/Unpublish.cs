using System;
using System.Linq;
using EPiServer.Shell.Modules;
using Microsoft.Extensions.DependencyInjection;

namespace dotcentric.Optimizely.Unpublish
{
    public static class Unpublish
    {
        public static IServiceCollection AddUnpublish(this IServiceCollection services)
        {
            services.Configure((Action<ProtectedModuleOptions>)(pm =>
            {
                if (pm.Items.Any(i => i.Name.Equals("dotcentric.Optimizely.Unpublish", StringComparison.OrdinalIgnoreCase)))
                    return;

                pm.Items.Add(new ModuleDetails()
                {
                    Name = "dotcentric.Optimizely.Unpublish"
                });
            }));
            return services;
        }
    }
}
