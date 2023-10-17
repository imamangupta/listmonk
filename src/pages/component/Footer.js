import React from 'react'

export default function Footer() {
    return (
        <>
            <section style={{ background: '#111926' }}>
                <div className='footer_set'>
                    <div style={{ width: '40%' }}>
                        <div>
                            <img src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/logo-light.png" alt="" />
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quod corrupti nostrum voluptatibus necessitatibus aliquam reprehenderit delectus inventore culpa eius numquam aliquid itaque, id, facilis maxime nisi molestias voluptates hic!</p>
                        </div>
                        <div>
                            <img style={{ padding: '5px' }} width={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
                            <img style={{ padding: '5px' }} width={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
                            <img style={{ padding: '5px' }} width={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
                            <img style={{ padding: '5px' }} width={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
                        </div>

                    </div>
                    <div style={{ width: '40%' }}>
                        <div>
                            <div className='footer_quick_header'>Quick Contact Info</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span class="material-symbols-outlined footer_q_icon">location_on</span>
                            <p style={{ paddingLeft: '10px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim optio eum, maxime labore illum similique.</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <span class="material-symbols-outlined footer_q_icon">call</span>
                            <p style={{ margin: '0', paddingLeft: '10px' }}>+91 2323232323</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <span class="material-symbols-outlined footer_q_icon">mail</span>
                            <p style={{ margin: '0', paddingLeft: '10px' }}>email@email.com</p>
                        </div>

                    </div>
                </div>
                <hr style={{ margin: '0px 10px' }} />
                <div className='down_footer_set'>
                    © Copyright Aadarsh Law Firm 2023 All Right Reserved
                </div>
            </section>
        </>
    )
}
