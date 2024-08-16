export const getDate = (date) =>{
    const eventDate = new Date(date);
    const dateOnly = eventDate.toISOString().split('T')[0];
    return dateOnly
}

export const getTime = (date) =>{
    const eventDate = new Date(date);
    const hours = eventDate.getUTCHours().toString().padStart(2, '0'); // Ensure two digits
    const minutes = eventDate.getUTCMinutes().toString().padStart(2, '0'); // Ensure two digits
    const timeOnly = `${hours}:${minutes}`;
    return timeOnly
}