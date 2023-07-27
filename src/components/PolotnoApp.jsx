// import { createDemoApp } from 'polotno/polotno-app'

import { createStore } from 'polotno/model/store'

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno'
import { Toolbar } from 'polotno/toolbar/toolbar'
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons'
import { SidePanel } from 'polotno/side-panel'
import Workspace from 'polotno/canvas/workspace'

import ShirtControl from './ShirtControl'

const store = createStore();
const page = store.addPage();

const pageWidth = 396
const pageHeight = 498
const shirtScale = 2
const shirtXOffset = -205
const shirtYOffset = -130

page.set({
    width: pageWidth,
    height: pageHeight
})

page.addElement({
    x: 0 + shirtXOffset,
    y: 0 + shirtYOffset,
    width: pageWidth * shirtScale,
    height: pageHeight * shirtScale,
    type: "image",
    src: "/t-shirt.png",
    fill: "red",
    draggable: false,
    contentEditable: false,
    styleEditable: false,
    resizable: false,
    selectable: false
})

page.addElement({
    x: 50,
    y: 50,
    type:"text",
    fill: "black",
    text: "Hello"
})


import './PolotnoApp.css'

const PolotnoApp = () => {

    // const xPadding = 50;
    // const yPadding = 50;
    return (
        <>
        <PolotnoContainer style={{ width: '100vw', height: 'calc(100vh - 70px)' }}>
            <SidePanelWrap>
                <SidePanel store={store} />
            </SidePanelWrap>
            <WorkspaceWrap>

                <Toolbar store={store} downloadButtonEnabled />
                <Workspace store={store}
                    // components={{
                    //     // https://polotno.com/docs/workspace
                    //     PageControls: () => {
                    //         return(
                    //             <ShirtControl />
                    //         )
                    //     }
                    // }}
                />
                
                <ZoomButtons store={store} />
            </WorkspaceWrap>
        </PolotnoContainer>
        </>
    )
}

export default PolotnoApp