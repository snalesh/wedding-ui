import {useState} from "react";

interface props {
    invitationId: string;
}

export function InvitationHeadline(props: props) {

    const [name, setName] = useState<string | null>(null)

    let text;
    if (name === null) {
        setTimeout(() => {
            setName('Zati and Benny')
        }, 2000);
        text = 'Save the Date'
    } else {
        text = 'Dearest ' + name
    }

    return (
        <span className="headline">{text}</span>
    );
}