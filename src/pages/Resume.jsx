import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

function Resume() {
  const pdfFile = 'src/assets/Resume-Wangui.pdf';
  return (
    <>
      <NavBar />
      <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfFile} />
        </Worker>
      </div>
      <Footer />
    </>
  );
}

export default Resume;

// import React from 'react'
// import { Document, Page } from 'react-pdf'
// import NavBar from '../components/layout/NavBar';
// import { PdfJs } from '@react-pdf-viewer/core';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import Footer from '../components/layout/Footer';
// // import ResumePdf from '../public/Resume-Wangui.pdf'
// // import pdf from 'public/Resume-Wangui.pdf'

// function Resume() {
//   const pdfFile = 'src/assets/Resume-Wangui.pdf';
//   return (
//     <>
//       <NavBar />
//       <div>
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//         {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.131/build/pdf.worker.min.js" /> */}
//         <Viewer fileUrl="pdfFile" />
//         </Worker>
//       </div>
//         {/* <div id='resume'>
//             <NavBar />
//             <h2>Resume</h2>
//             <Document file='public\Resume-Wangui.pdf' >
//                 <Page pageNumber={1}/>
//             </Document>
//         </div> */}
//       <Footer />
//     </>
//   )
// }

// export default Resume