# Federal Project Portal Site

A usage of [gatsby-theme-project-portal](https://github.com/thepolicylab-projectportals/project-portal-theme) for the Evaluation Officer Council. 

The Docker implementation of the Federal Project Portal Site is based on the implementation found in the [cloud-gov Pages template](https://github.com/cloud-gov/pages-uswds-gatsby).


### Project Portal Packages
This project utilizes the gatsby-theme-project-portal and project-portal-content-netlify packages developed by The Policy Lab team. 
Please refer to https://www.npmjs.com/settings/thepolicylab-projectportals/packages for more details on these public packages. 

## Quick Start Guide


### Running the application

#### With locally installed node
Run the following command to install the required dependencies.
```shell
npm install
```
For rapid development of new components or styling, run the following command.
```shell
npm run develop
```

Afterwards, run the following command to generate a production-ready version of your website. Certain gatsby node APIs only fire during the build process. While develop mode is fine for most cases, the final built site might act in a subtly different way. For more details, see https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/#differences-between-develop-and-build
```shell
npm run build
```
Once the build process is completed, run the following command to preview the production build locally.
```shell
npm run serve
```


#### With Docker
_Before running the application with Docker, ensure that you delete the `.cache`, `node_modules`, and `public` folders, which might have been generated from previous executions of the Federal Project Portal site._

```shell
docker-compose run node npm install
```
```shell
docker-compose up
```
To build but not serve the site, run:
```
docker-compose run node npm run build
```

## Accessing Decap CMS 

_For local execution and Docker execution_

Navigate to [static/admin/config.yml](./static/admin/config.yml) and make the following change locally:

```yaml
local_backend: true
```

In a separate terminal, spin up the `decap-server` by running the following command.

```shell
npx decap-server
```
