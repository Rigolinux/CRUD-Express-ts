

import app from "./app";

//routes
import travelRouter  from './routes/travel.routes';

//database
import sequelize from "./Database/database";

//models
import './Models/Travel';

const port = 3000;

app.use('/', travelRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);

});

const main = async () => {
    await sequelize.sync({force: true});
    console.log('Database connected');
};

main();