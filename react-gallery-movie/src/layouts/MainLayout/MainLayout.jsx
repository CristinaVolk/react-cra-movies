import './MainLayout.css'

export function MainLayout(props) {
    const {header, left, right, content, footer} = props;

    return (
        <>
            {header && <header>{header}</header>}
            <main>
                {left && <div className="left">{left}</div>}
                <div className="content">{content}</div>
                {right && <div className="right">{right}</div>}
            </main>
            {footer && <footer>{footer}</footer>}
        </>
    )
}
