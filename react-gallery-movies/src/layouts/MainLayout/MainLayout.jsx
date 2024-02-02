import './MainLayout.css'

export function MainLayout(props) {
    const {header='Navigation', left = 'left', right='Right', footer='Footer', children} = props;

    return (
        <>
            {header && <header>{header}</header>}
            <main>
                {left && <div className='leftbar'>{left}</div>}

                <div className='content'>{children}</div>

                {right && <div className='rightbar'>{right}</div>}
            </main>
            {footer && <footer>{footer}</footer>}
        </>
    )
}
