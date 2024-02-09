import image from "../assets/image.png";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import data from "../dataCatalog/data.json";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Step1 = ({ submitForm, handleInputChange, error, formValues }) => {
  return (
    <div className="step1">
      <div>
        <img className="desktopimg" alt="image" src={image} />
      </div>
      <div>
        <div className="title">
          <div className="titleContainer">
            <div className="titlePill">Seguro Salud Flexible</div>
            <div className="subtitle">Creado para ti y tu familia</div>
          </div>
          <div className="heroImg">
            <img className="defaultHomeImg" alt="image" src={image} />
          </div>
        </div>
        <hr className="separator" />
        <div>
          <p className="description">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría, 100% online.
          </p>
        </div>
        <Box>
          <Stack direction="row">
            <Autocomplete
              id="tipoDoc"
              name="tipoDoc"
              value={formValues.tipoDoc}
              options={data.typeID}
              onChange={handleInputChange}
              renderInput={(params) => <TextField {...params} label="Tipo" />}
            />
            <TextField
              fullWidth
              error={formValues.numDoc === "" ? error.valid : false}
              helperText={formValues.numDoc === "" ? error.text : ""}
              value={formValues.numDoc}
              id="numDoc"
              label="Nro de Documento"
              name="numDoc"
              onChange={handleInputChange}
            />
          </Stack>
          <Stack direction="row">
            <TextField
              margin="normal"
              fullWidth
              error={formValues.Celular === "" ? error.valid : false}
              helperText={formValues.Celular === "" ? error.text : ""}
              value={formValues.Celular}
              id="Celular"
              label="Celular"
              name="Celular"
              onChange={handleInputChange}
            />
          </Stack>
          <Stack direction="row">
            <Checkbox
              margin="normal"
              id="Terms"
              name="Terms"
              checked={formValues.Terms}
              color="success"
              onChange={handleInputChange}
            />
            <p>
              Acepto la{" "}
              <a href="https://www.youtube.com">Politica de Privacidad</a>
            </p>
          </Stack>
          <Stack direction="row">
            <Checkbox
              margin="normal"
              id="conditions"
              name="conditions"
              checked={formValues.conditions}
              color="success"
              onChange={handleInputChange}
            />
            <p>
              Acepto la{" "}
              <a href="https://www.youtube.com">
                Politica de Comunicaciones Comerciales
              </a>
            </p>
          </Stack>
          <Stack direction="row" className="centerButton">
            <button onClick={() => submitForm()} className="submitButton">
              {formValues.name === "" ? "Cotiza aqui" : <CircularProgress />}
            </button>
          </Stack>
        </Box>
      </div>
    </div>
  );
};
export default Step1;
