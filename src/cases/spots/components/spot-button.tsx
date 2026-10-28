import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { SpotDialog } from "./spot-dialog";
import { useState } from "react";

export function SpotButton() {

    const [ dialogOpen, setDialogOpen ] = useState(false);
    return (
        <div className="flex items-center justify-center">
            <Button
                className="flex cursor-pointer flex-col items-center
            gab-1 rounded-2xl px-6 py-4 text-brand-foreground
            transtion-colors hover: bg-primary hover:text:text-brand-foreground"
                onClick={() => setDialogOpen(true)}
            >
                <MapPin className="size-6" />
                Selecionar Mesa
            </Button>

            <SpotDialog open={dialogOpen} />

        </div>

    );
}