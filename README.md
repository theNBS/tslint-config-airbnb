# TSLint Config NBS

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) for [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
>
> Based on https://github.com/progre/tslint-config-airbnb

## Installation

```sh
npm install tslint-config-nbs --save
```

## Usage

In `tslint.json`:

```json
{
  "extends": "tslint-config-nbs"
}
```

### Rules

* [tslint](https://www.npmjs.com/package/tslint)
* [tslint-consistent-codestyle](https://www.npmjs.com/package/tslint-consistent-codestyle)
* [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules)
* [tslint-microsoft-contrib](https://www.npmjs.com/package/tslint-microsoft-contrib)

## Versioning

```
+----- Major version is synchronize with tslint's major version.
| +--- Minor version has BREAKING CHANGE and feat.
| | +- Patch version has patch.
| | |
x.x.x
```

## License

Apache 2.0
