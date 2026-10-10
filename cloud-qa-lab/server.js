const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cloud QA Lab</title>
        </head>
        <body>
            <h1>Welcome to Cloud QA Lab</h1>
            <p>This application is running on AWS EC2.</p>
            <p>Environment: Cloud</p>
        </body>
        </html>
    `);
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Cloud QA Lab running on port 3000");
});