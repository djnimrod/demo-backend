module.exports = {
    HOST : "ec2-54-90-68-208.compute-1.amazonaws.com",
    USER : "mfmdswasawfhna",
    PASSWORD : "6eaf9dd30535b2a3556eb59cadbf4b289dfbd7cb6e7914ca565c7d31710736d5",
    DB : "mfmdswasawfhna",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000 
    }
};