import React, { useState } from "react";
import "./App.css";
import { Stage, Layer, Rect, Line } from "react-konva";

const App = () => {
  const [exibirSim, setExibirSim] = useState(false);
  const [exibirNao, setExibirNao] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="qualquer">
          <h3>Você separa as águas do vaso sanitário das águas cinzas?</h3>
        </div>
        <div class="row">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setExibirSim(true)}
            style={{ marginTop: "20px", marginRight: "15px" }}
          >
            Sim
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setExibirNao(true)}
            style={{ marginTop: "20px" }}
          >
            Não
          </button>
        </div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          {exibirSim && (
            <Layer>
              <Line
                x={250}
                y={200}
                points={[400, -200, 400, -50, -50, -50]}
                stroke="#A34700"
              />

              <Rect
                x={100}
                y={100}
                width={100}
                height={100}
                fill="#704E25"
                shadowBlur={5}
              />
            </Layer>
          )}
          {exibirNao && (
            <Layer>
              <Line
                x={250}
                y={200}
                points={[470, -200, 470, -50, 1000, -50]}
                stroke="#A34700"
              />
              <Rect
                x={1200}
                y={100}
                width={100}
                height={100}
                fill="#704E25"
                shadowBlur={5}
              />
            </Layer>
          )}
        </Stage>
      </header>
    </div>
  );
};

export default App;
