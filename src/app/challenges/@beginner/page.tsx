"use client";

import React, { useState } from "react";
import Modal from "@/components/ide/Modal";
import { Button } from "@/components/Button";

const ContentPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <p>If you see this page then you know its outside of slugs</p>
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      <Modal
        isOpen={showModal}
        isClose={() => setShowModal(false)}
      >
        <div>
          <h1 className="bg-black rounded-xl p-4 text-5xl">Modal Title</h1>
          <p>Content</p>
        </div>
      </Modal>
    </div>
  );
};

export default ContentPage;
