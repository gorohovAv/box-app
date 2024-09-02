import { FormGroup } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Scene from "../Scene/Scene";
import { Canvas } from "@react-three/fiber";
import "./control-form.css";

const ControlForm = () => {
  return (
    <div className="control-form">
      <FormGroup>
        <TextField
          required
          id="height"
          label="height"
          defaultValue="1"
          margin="normal"
        />
        <TextField
          required
          id="width"
          label="width"
          defaultValue="1"
          margin="normal"
        />
        <TextField
          required
          id="length"
          label="length"
          defaultValue="1"
          margin="normal"
        />
        <Button variant="contained">Calculate</Button>
      </FormGroup>
      <Canvas>
        <Scene></Scene>
      </Canvas>
    </div>
  );
};

export default ControlForm;
