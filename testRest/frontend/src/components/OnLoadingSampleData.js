function OnLoadingSampleData(Component) {
    return function LoadingSampleData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />

        else return (
            <div>
                <h1 style ={{ textAlign : 'center'}} >Подождите, данные загружаются...</h1>
            </div>
        )
    }
}

export default OnLoadingSampleData