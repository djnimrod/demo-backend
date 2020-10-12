module.exports = {
    HOST : "https://backend-nodejs-postgresql.herokuapp.com",
    USER : "postgres",
    PASSWORD : "puntodev",
    DB : "tutorialdb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000 
    }
};