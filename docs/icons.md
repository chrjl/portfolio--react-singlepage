# Icons

| Implementation |                                             |
| -------------- | ------------------------------------------- |
| Current        | [`@heroicons/react`](https://heroicons.com) |
| Previous       | Fontawesome SVG saved to individual files   |

## Dynamic selection of icons

To allow for icons to be specified in imported metadata, the entire heroicons library is imported (rather than a subset of individually specified icons).

> **Don’t be afraid to import too much**
>
> Modern build tools, such as webpack and others, bundle modules together and optimize them to speedup loading. They also removed unused imports.
>
> For instance, if you import `* as library` from a huge code library, and then use only few methods, then unused ones will not be included into the optimzed bundle.
>
> --- https://javascript.info/import-export#import

- [ ] Check that its tree-shaken during build

For this purpose, a `HeroIcon` wrapper component that accepts the icon name as a prop is used to instantiate a heroicon.
