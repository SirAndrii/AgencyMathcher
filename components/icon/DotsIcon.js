export default function DotsIcon({color = '#222222'}) {

    return (
        <svg width="4" height="64" viewBox="0 0 4 64" fill='none' xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill={color}/>
            <circle cx="2" cy="22" r="2" fill={color}/>
            <circle cx="2" cy="42" r="2" fill={color}/>
            <circle cx="2" cy="62" r="2" fill={color}/>

        </svg>

    );
};