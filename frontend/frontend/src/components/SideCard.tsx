interface Props {
    name: string;
}

export function SideCard({ name }: Props) {

    return (
        <div className="side-card">
            <h3>{name}</h3>
        </div>
    )
}