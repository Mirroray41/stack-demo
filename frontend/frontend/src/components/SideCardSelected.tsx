interface Props {
    name: string;
}

export function SideCardSelected({ name }: Props) {

    return (
        <div className="side-card selected">
            <h3>{name}</h3>
        </div>
    )
}