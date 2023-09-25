import { styled } from "@mui/system";
import { Datagrid } from "react-admin";

export const CustomDataGrid = styled(Datagrid)({
  ".RaDatagrid-rowEven": {
    backgroundColor: "lavender",
  },

  ".RaDatagrid-headerCell": {
    backgroundColor: "MistyRose",
  },
});
