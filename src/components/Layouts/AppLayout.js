import Navigation from '@/components/Layouts/Navigation'
import Nav from '@/components/Layouts/Nav'
import { useAuth } from '@/hooks/auth'

const AppLayout = ({ header, children, ...props }) => {
    const { user, guest } = useAuth({ middleware: 'guest' })

    return (
        <>
            <div className="min-h-screen bg-[#F4F4F4]">
                {user ? <Nav user={user} /> : <Nav user={guest} />}
                {props.title ? (
                    <h1 className="py-4 px-4 font-extrabold">{props.title}</h1>
                ) : (
                    ' '
                )}
                {/* Page Heading */}
                <header className="bg-[#FFFFFF] shadow">
                    <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 shadow">
                        {header}
                    </div>
                </header>
                {props.subTitle}
                {/* Page Content */}
                <main>{children}</main>
            </div>
        </>
    )
}

export default AppLayout
