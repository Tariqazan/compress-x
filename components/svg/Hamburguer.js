export const Hamburguer = ({ fill, size, height, width, ...props }) => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 22.5H26.25" stroke="#DCB4F5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.75 15H26.25" stroke="#DCB4F5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.75 7.5H26.25" stroke="#DCB4F5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
