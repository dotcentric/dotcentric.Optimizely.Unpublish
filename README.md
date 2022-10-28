# dotcentric Optimizely Unpublish

[![Platform](https://img.shields.io/badge/Platform-.NET%206-blue.svg?style=flat)](https://docs.microsoft.com/en-us/dotnet/)
[![Platform](https://img.shields.io/badge/Optimizely-%2012-orange.svg?style=flat)](http://world.episerver.com/cms/)

## Description
This package is really simple, but aims to solve a fairly simple recurring question. "How do I unpublish content?" - While the functionality for this has existed forever, it's not that intuitive for content editors coming from other platforms where to find it.

This package adds an "Unpublish" option to the content publish menu drop down, which then triggers the usual expire content behind the scenes.

![Screenshot of package](/images/unpublish.png)

## How to get started?
* Install NuGet package (use [Optimizely Nuget](http://nuget.episerver.com))
* ``Install-Package dotcentric.Optimizely.Unpublish``

## Configuration

All you need to do other than installing the package is register the add on in your CMS project `Startup.cs`

```cs
public void ConfigureServices(IServiceCollection services)
{
    // The usual stuff omitted

    services.AddUnpublish();
}
```

## Packaging updates
All you need to do is run `dotnet pack` in the solution directory.

