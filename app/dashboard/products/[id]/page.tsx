import { EditForm } from "@/app/components/dashboard/EditForm";
import { prisma } from "@/app/lib/db";
import { notFound } from "next/navigation";

const getData = async (productId: string) => {
    const data = await prisma.product.findUnique({
        where: {
            id: productId
        }
    });

    if(!data) {
        return notFound();
    }

    return data;
}

// id: string is because we named the folder this file is in [id]
const EditRoute = async ({params} : {params: Promise<{id: string}>}) => {
    const { id } = await params;
    const data = await getData(id);

    return (
        <EditForm data={data} />
    )
}

export default EditRoute