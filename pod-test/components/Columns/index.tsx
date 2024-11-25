interface ColumnsProps{
    children: React.ReactNode,
    className?: string
}

export const Columns = ({ children, className='col-12' }:ColumnsProps) =>{
    return <div className={className}>{children}</div>
}