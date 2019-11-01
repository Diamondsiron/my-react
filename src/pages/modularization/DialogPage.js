import React, { useState } from "react";
import { createPortal } from "react-dom";


export default function DialogPage() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="dialogPgae">
      <h1>DialogPage</h1>
      <button onClick={() => setShowDialog(!showDialog)}>toggle</button>
      {showDialog && <Dialog />}
    </div>
  );
}



 class Dialog extends React.Component {
  constructor(props) {
    super(props);
    const doc = window.document;
    this.node = doc.createElement("div");
    doc.body.appendChild(this.node);
  }
  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
  render() {
    return createPortal(
      <div className="dialog">
        <h1>Dialog</h1>
      </div>,
      this.node,
      // window.document.body,
    );
  }
}
