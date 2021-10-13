import ReactMegaMenu from 'react-mega-menu'

const MegaMenu = () => {
    const MOCK_CATEGORIES = [
        {
            label: "Category1",
            key: "Category1",
            items: "Category1 content"
        },
        {
            label: "Category2",
            key: "Category2",
            items: "Category2 content"
        },
        {
            label: "Category3",
            key: "Category3",
            items: "Category3 content"
        }
    ]

    const handleExitMenu = () => {
        console.log("exit menu")
    }

    return (
        <ReactMegaMenu
            tolerance={50}      // optional, defaults to 100
            direction={"Right"}  // optional, defaults to "RIGHT", takes in "RIGHT" || "LEFT"
            styleConfig={{
                menuProps: {
                    style: {
                        border: "2px solid red",
                        height: "20em",
                        width: "10em",
                        padding: "2px",
                        margin: "0"
                    }
                },
                contentProps: {
                    style: {
                        width: "10em",
                        border: "2px solid yellow",
                        padding: "2px"
                    }
                },
                menuItemProps: {
                    style: {
                        border: "2px solid green",
                        padding: "2px",
                        height: "2em"
                    }
                },
                menuItemSelectedProps: {
                    style: {
                        border: "2px solid purple",
                        padding: "2px",
                        height: "2em",
                        backgroundColor: "grey"
                    }
                },
                containerProps: {
                    style: {
                        border: "2px solid blue",
                        padding: "2px"
                    }
                }
            }}
            onExit={() => handleExitMenu}  // a function to be called when a mouse leaves the container
            data={MOCK_CATEGORIES}        // array of data to be rendered
        />
    )
}

export default MegaMenu