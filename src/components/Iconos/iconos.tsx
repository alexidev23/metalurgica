interface IconosProps {
  color?: string;
  width?: number;
  height?: number;
}

export function Telefono ({ color, width, height }: IconosProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path d="M0 0h24v24H0z" stroke="none"/><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>
  )
}

export function Mail ({ color, width, height }: IconosProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path d="M0 0h24v24H0z" stroke="none"/><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/><path d="m3 7 9 6 9-6"/></svg>
  )
}

export function Mapa ({ color, width, height }: IconosProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-2"><path d="M0 0h24v24H0z" stroke="none"/><path d="M12 18.5 9 17l-6 3V7l6-3 6 3 6-3v7.5M9 4v13M15 7v5.5M21.121 20.121a3 3 0 1 0-4.242 0c.418.419 1.125 1.045 2.121 1.879 1.051-.89 1.759-1.516 2.121-1.879zM19 18v.01"/></svg>
  )
}