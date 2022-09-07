# remark-parse types broken repro

## How to use

```sh
$ yarn
$ yarn run typecheck
```

## Result

```
# ~/Projects/github.com/yamachu/remark-types-broken-repro $ [master]
 yarn run typecheck
yarn run v1.22.19
$ tsc --noEmit
node_modules/remark-parse/lib/index.d.ts:3:26 - error TS2307: Cannot find module 'mdast-util-from-markdown/lib' or its corresponding type declarations.

3   options: void | import('mdast-util-from-markdown/lib').Options | undefined
                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error in node_modules/remark-parse/lib/index.d.ts:3

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
