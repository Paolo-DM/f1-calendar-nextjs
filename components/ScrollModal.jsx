import { Modal, useModal, Button } from "@nextui-org/react";
import { EyeIcon } from "@heroicons/react/outline";
import RaceStanding from "./RaceStanding";

export default function ScrollModal({ raceRound, year }) {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <EyeIcon
        onClick={() => setVisible(true)}
        className="w-6 md:w-8 hover:text-[#979797a9] hover:cursor-pointer text-[#979797]"
      ></EyeIcon>
      <Modal
        scroll
        blur
        className=""
        width="900px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Body>
          <RaceStanding year={year} raceRound={raceRound} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            bordered
            color="error"
            onClick={() => setVisible(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
