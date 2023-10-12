import { ChangeEvent, FormEvent, useState } from "react";
import { useUploadMutation } from "../../api/Upload/mutation";
import { useQueryClient } from "react-query";
import { useCreateProductsMutation } from "../../api/Products/mutation";
import { toast } from "react-toastify";

const useCreateProducts = () => {
  const queryClient = useQueryClient();

  const uploadMutation = useUploadMutation();
  const createProductsMutation = useCreateProductsMutation();
  const [fileName, setFileName] = useState<File>();

  const [uploadData, setUploadData] = useState({
    name: "",
    count: 0,
    safetyCount: 0,
    incomingPrice: 0,
    outgoingPrice: 0,
    imageUrl: "",
  });

  const onChangeImage = (event: ChangeEvent<HTMLInputElement> | any) => {
    let image: File;
    image = event.target.files[0];
    setFileName(image);

    const formData = new FormData();
    formData.append("image", image);

    uploadMutation.mutate(
      {
        formData,
      },
      {
        onSuccess: (data) => {
          setUploadData((prev) => ({ ...prev, imageUrl: data.imageUrl }));
        },
      }
    );
  };

  const onChangeUploadData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUploadData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitUploadData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { count, imageUrl, incomingPrice, name, outgoingPrice, safetyCount } =
      uploadData;

    createProductsMutation.mutate(
      {
        count: Number(count),
        incomingPrice: Number(incomingPrice),
        name: name,
        outgoingPrice: Number(outgoingPrice),
        safetyCount: Number(safetyCount),
        imageUrl: imageUrl,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("");
          toast.success("성공");
        },
        onError: () => {},
      }
    );
  };

  return {
    fileName,
    onSubmitUploadData,
    onChangeUploadData,
    onChangeImage,
    uploadData,
  };
};

export default useCreateProducts;
