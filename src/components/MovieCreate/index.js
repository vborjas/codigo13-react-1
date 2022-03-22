import { Button, Dialog, DialogContent, TextField, Grid } from "@mui/material";

const MovieCreate = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Crear Pelicula
      </Button>
      <Dialog open>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField label="Nombre de la peli" name="name" fullWidth />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Nombre del director"
                name="director"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField label="Genero" name="gender" fullWidth />
            </Grid>
            <Grid item md={6}>
              <TextField label="Link del video" name="video_link" fullWidth />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Link de la portada"
                name="wallpaper"
                fullWidth
              />
            </Grid>
            <Grid item md={12}>
              <Button variant="contained">Crear</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MovieCreate;
