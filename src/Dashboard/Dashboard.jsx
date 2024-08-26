const Dashboard = () => {
    const isAdmin = false;

    return <div>
{
    isAdmin ? <>
    <h1>hello user</h1>
    </>
    :
    <>
    <h1>hello admin</h1>
    </>
}
    </div>;
};
export default Dashboard;