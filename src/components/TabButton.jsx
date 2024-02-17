// export default function TabButton(props){
//     return <li><button>{props.children}</button></li>
// }
// export default function TabButton({children,onSelect,isSelected}){
    export default function TabButton({children,isSelected,...props}){
    console.log("tab button randing");
   
    // return <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    return <li><button className={isSelected ? 'active' : undefined} {...props}>{children}</button></li>
}
// export default function TabButton({label}){
//     return <li><button>{label}</button></li>
// }