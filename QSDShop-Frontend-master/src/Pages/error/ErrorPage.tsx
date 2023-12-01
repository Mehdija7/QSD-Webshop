import classes from './ErrorPage.module.css'
const Error = () =>
{
    return(
        <>
        <main className={classes.main}>
            <h1 className={classes.naslov}>An error occurred</h1>
            <p>Could not find this page!</p>
        </main>
        </>
    );
}
export default Error;