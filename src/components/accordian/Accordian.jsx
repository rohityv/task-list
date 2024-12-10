import React, { useState } from 'react'
import { IMAGE_PATH } from "../../constant/Image"
import { statusObj, accordianData, backgroundColor } from '../Data'
import "./accordian.css"

function Accordian() {
    const [view, setView] = useState(false);

    const handleProjectViewClick = (e) => {
        e.stopPropagation();
        const view = e.target.id
        if (view === "listView") {
            setView(true)
        } else if (view === "cardView") {
            setView(false)
        }

    }


    return (
        <>
            {
                view ? <>
                    <div className="accordian-wrapper">

                        {accordianData.map(element => (
                            <AccordianChildList element={element} handleProjectViewClick={handleProjectViewClick} view={view} />
                        ))}
                    </div>
                </> : <>
                    <div className="accordian-wrapper">

                        {accordianData.map(element => (
                            <AccordianChildCard element={element} handleProjectViewClick={handleProjectViewClick} view={view} />
                        ))}
                    </div>
                </>
            }
        </>
    )
}

export default Accordian

function AccordianChildCard({ element, handleProjectViewClick, view }) {
    const [open, setOpen] = useState(false);

    const handleAccordianClick = (e) => {
        setOpen(!open)
    };

    return (
        <>
            <div className="accordian">
                <div className={`${element.name}-heading`} onClick={handleAccordianClick}>
                    <div className="heading-left">
                        <span>{element.name}</span>
                        <img src={`${IMAGE_PATH}/tyIcon.png`} alt="Icon" />
                    </div>
                    <div className="heading-right">
                        <img id='listView' onClick={handleProjectViewClick} src={`${IMAGE_PATH}/${!view ? "double-line.svg" : "dark-img.png"}`} alt="Icon" />
                        <img id='cardView' onClick={handleProjectViewClick} src={`${IMAGE_PATH}/${!view ? "_Button_.png" : "white-img.png"}`} alt="Icon" />
                    </div>
                </div>
                {(element.name == "All Projects" ? !open : open) && <div className={`${element.name}-content`}>
                    {statusObj.map(ele => (
                        <div className="content">
                            <div className="content-text" style={{ backgroundColor: backgroundColor[ele.name] }}>{ele.name}</div>
                            <div className="content-card-wrapper">
                                {ele.cardData.map(card => (
                                    <div className="content-card">
                                        <div className="heading">
                                            <p><img src="" alt="" />{card.pname}</p><p>ID: {card.id}</p>
                                        </div>
                                        <div className="bar">
                                            <span className="start-value">{card.srange}</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{ width: `${card.done}%` }}>
                                                    <span className="progress-text">{card.done}%</span>
                                                </div>
                                            </div>
                                            <span className="end-value">{card.erange}</span>
                                        </div>
                                        <div className="date">
                                            <img src="" alt="" />
                                            {card.sdate} - {card.edate}
                                        </div>
                                        <div className="people">
                                            <p>{card.people}</p><p>{card.files} Files</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>}
            </div>
        </>
    )
}

function AccordianChildList({ element, handleProjectViewClick, view }) {
    const [open, setOpen] = useState(false);

    const handleAccordianClick = (e) => {
        setOpen(!open)
    };

    const tableViewData = statusObj.reduce((acc, item) => acc.concat(item.cardData), []);

    return (
        <>
            <div className="accordian">
                <div className={`${element.name}-heading`} onClick={handleAccordianClick}>
                    <div className="heading-left">
                        <span>{element.name}</span>
                        <img src={`${IMAGE_PATH}/tyIcon.png`} alt="Icon" />
                    </div>
                    <div className="heading-right">
                        <img id='listView' onClick={handleProjectViewClick} src={`${IMAGE_PATH}/${!view ? "double-line.svg" : "dark-img.png"}`} alt="Icon" />
                        <img id='cardView' onClick={handleProjectViewClick} src={`${IMAGE_PATH}/${!view ? "_Button_.png" : "white-img.png"}`} alt="Icon" />
                    </div>
                </div>
                {(element.name == "All Projects" ? !open : open) && <div className={`${element.name}-content-list`}>
                    <div className="content">
                        <table border="1" style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Project Name</th>
                                    <th>%</th>
                                    <th>Owner</th>
                                    <th>Tasks</th>
                                    <th>Status</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableViewData.map(data => (
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.pname}</td>
                                        <td>{data.done}</td>
                                        <td>
                                            <div class="owner">
                                                {data.owner}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="bar">
                                                <span class="start-value">{data.srange}</span>
                                                <div class="progress-bar">
                                                    {/* <div class="progress-fill" style={{"width":`${data.done}%`}}> */}
                                                    <div class="progress-fill" style={{ width: `${data.done}%` }}>
                                                        <span class="progress-text">{data.done}%</span>
                                                    </div>
                                                </div>
                                                <span class="end-value">{data.erange}</span>
                                            </div>
                                        </td>
                                        <td>{data.status}</td>
                                        <td>{data.startDate}</td>
                                        <td>{data.endDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>}
            </div>
        </>
    )
}
