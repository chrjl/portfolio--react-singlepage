# Build process

Mount or author a data module at `content/`. Import from this path is hardcoded into the the top-level `App` component.

> [!NOTE]
> Git subtree (or submodule) can be used to accomplish this.
>
> ```console
> git subtree add --prefix=content <repo> <branch> [--squash]
> git subtree pull --prefix=content <repo> <branch> [--squash]
> ```

**If the content module needs to be built:** the `content/` subdirectory is configured as an `npm` workspace, to facilitate calling the data module's build (and dev) script with the `-w | --workspace` flag.

```console
npm run build -w content && npm run build
```

## Dev server

Development in this app and its imported data module can be performed simultaneously using [`concurrently`](https://github.com/open-cli-tools/concurrently). `npm` dev scripts are provided for the content workspace and the Vite server.

```console
concurrently -c "auto" "npm:dev-*"
```

which should be equivalent to:

```console
concurrently -c "auto" "npm run dev -w content --if-present" "npm run dev"
```

See also: [[development]]

