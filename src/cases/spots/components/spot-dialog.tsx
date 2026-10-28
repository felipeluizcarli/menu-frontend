import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog"
import { MapPin } from "lucide-react"

interface SpotDialogProps {
    open: boolean;
}

export function SpotDialog({
    open    

}: SpotDialogProps) {

    const { data: spots = [] } = useSpots();

    return (
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Selecione a sua Mesa</DialogTitle>
                    <DialogDescription>
                        Escolha a mesa que voce esta para fazer o pedido.
                    </DialogDescription>
                </DialogHeader>

                <div className="min-h-0 overflow-y-auto">
                    <div className="grid grid-cols-3 gap-3">

                        {spots.map(spot => (
                            <Button
                                key={spot.id}                   
                                variant="outline"
                                className="h-auto min-h-20 flex-col p-4"
                            >
                                <MapPin className="size-6" />
                                {spot.name}
                            </Button>
                        ))}

                    </div>
                </div>


            </DialogContent>
        </Dialog>
    )
}
function useSpots() {
    throw new Error("Function not implemented.");
}

