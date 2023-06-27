# SofthouseTask

## Usage

### API

API is written in C# language with .NET 6.0. 

API is consuming data from: 
https://portal.thatapicompany.com/pages/dog-api -> https://documenter.getpostman.com/view/5578104/2s935hRnak

and it's done using RestSharp in a combination with builder pattern.

There are no specific notes regarding the API. After you cloned the repository, open the SofthouseTask.API project (SofthouseTask.sln) and start it.

### Web

Web application is done using Angular framework (v15.1.6) with componennts designed using the Angular Material UI.

After you cloned the project and started the API project, open the folder "SofthouseTask.Web" and if you are using VS Code, use Git Bash Here and type "code ." to open the Visual Studio code with all project files so you can test the app.

After that, open Terminal and use the command below for installing workspace npm dependencies:

```
npm install
```

After the installation of all required npm dependency packages is completed for starting the project, in the same Terminal type command below for running the Angular server where you can test the app (http://localhost:4200):

```
ng serve
```
Safe using :) 
