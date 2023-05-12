import PropTypes from 'prop-types';
import PublicLayout from './public'
import PrivateLayout from './private'

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['public', 'private']),
};

interface LayoutProps {
    variant: any,
    children: React.ReactNode,
}

export default function Layout({ variant = 'public', children }: LayoutProps) {
    if (variant === 'private') {
        return <PrivateLayout>{children}</PrivateLayout>
    }

    return <PublicLayout> {children} </PublicLayout>;
}