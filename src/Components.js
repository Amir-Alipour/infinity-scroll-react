import './App.css';

export const Content = ({children, handler}) => {
    return (
        <div className="content-container" onScroll={(e) => handler(e)}>
            {
                children
            }
        </div>
    )
}

export const Loading = ({children}) => {
    return (
        <div className="loading-container">
            <h4>{children}</h4>
        </div>
    )
}