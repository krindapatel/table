import React from 'react'

const Table = () => {
    const list = [{ name: 'Jane Cooper', title: 'Regional Paagigm Technician', age: 27, role: 'Admin', img: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg' },
    { name: 'Cody Fisher', title: 'Product Directive Officer', age: 27, role: 'Owner',  img: 'https://thumbs.dreamstime.com/b/young-man-standing-crossed-arms-pose-square-composition-photo-portrait-happy-smiling-face-male-model-blue-green-background-187062104.jpg'  },
    { name: 'Esther Howard', title: 'Forward Responsive Developer', age: 27, role: 'Member', img:'https://media.istockphoto.com/id/1355110818/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=T39jUOOjC8H-Op0cfd-uiNXk1a2XBn1sXkQbKIWwY7E=' },
    { name: 'Kirtin Wilson', title: 'Central Security Manager', age: 27, role: 'Member', img:'https://thumbs.dreamstime.com/b/tranquil-caucasian-handsome-brunet-man-blue-long-scarf-posing-wrinkled-face-against-background-square-image-236510369.jpg' }]
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <table border={'2px'} cellPadding={'10px'} style={{borderRadius:'15px', borderCollapse:'collapse'}}>
                <tr  style={{ background: '#eee' }}>
                    <td>NAME</td>
                    <td>TITLE</td>
                    <td>AGE</td>
                    <td>ROLE</td>
                </tr>

                {list.map((item) => (
                    <tr>
                        <td>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={item.img} style={{ borderRadius: '100px', marginRight: '10px', height: '70px' }} />
                                <span>{item.name}</span>
                            </div>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.age}</td>
                        <td>{item.role}</td>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default Table
