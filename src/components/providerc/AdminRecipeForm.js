import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function AdminRecipeForm() {
    return (

        <div className="CrudFormContainer">
      <Card color="transparent" shadow={false}>

        <Typography color="gray" className="mt-1 font-normal">
          Enter your recipe details.
        </Typography>
        <form  className="mt-8 mb-2 ">
      
          <div style={{width:"35rem"}} className="mb-4  ">
            <Input  size="lg" label="Meal Name" />

          </div>

          <div className="mb-4 flex ">
            <Input style={{width:"10rem"}}  size="lg" label="Name 1" />
            <Input style={{width:"10rem"}}  size="lg" label="Name 2" />
            <Input style={{width:"10rem"}}  size="lg" label="Name 2" />
           </div>
           
          <div className="mb-4 flex ">
            <Input style={{width:"10rem"}} size="lg" label="Youtube link 1" />
            <Input style={{width:"10rem"}} size="lg" label="Youtube link 2" />
            <Input style={{width:"10rem"}} size="lg" label="Youtube link 2" />
           </div>
          <Checkbox
            label={
              (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Register
          </Button>

        </form>
      </Card>
      </div>
    );
  }