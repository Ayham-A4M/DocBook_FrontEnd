
import { Button } from "@/components/ui/button"
import handleSaveReport from "./handler/handleSaveReport";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IoIosAddCircle } from "react-icons/io";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MdDone } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import FormErrorMessage from '../../../components/FormErrorMessage'
const Report = ({ setAppointmentId, appointmentId, setAppointments }) => {
    const [open, setOpen] = useState(false);
    const [medicineValue, setMedicineValue] = useState('');
    const [noteValue, setNoteValue] = useState('');

    const handleRemoveMedicine = (id) => {
        const prevMed = getValues("prescriptions");
        const newMed = prevMed.filter((e) => (e.id != id));
        console.log(newMed);
        setValue("prescriptions", newMed);
    }
    const handleRemoveNote = (id) => {
        const prevNotes = getValues("notesForPatient");
        const newNotes = prevNotes.filter((e) => (e.id != id))
        setValue("notesForPatient", newNotes);
    }




    const reportSchema = yup.object().shape({
        patientName: yup.string().min(3).max(25).required(),
        age: yup.number().integer().min(1).max(150).required(),
        reason: yup.string().min(10).required(),
        symptoms: yup.string().required(),
        doctorSummary: yup.string().min(20).required(),
        patientStatus: yup.string().oneOf(["normal", "stable", "dangerous"]),
        prescriptions: yup.array().min(1).max(10),
        notesForPatient: yup.array().min(1).max(10).required(),

    })



    const { control, handleSubmit, watch, setValue, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(reportSchema),
        defaultValues: {
            patientName: '',
            age: 1,
            symptoms: '',
            reason: '',
            doctorSummary: '',
            patientStatus: 'normal',
            notesForPatient: [],
            prescriptions: [],
        }
    });
    watch('prescriptions');
    watch('notesForPatient');


    const submitReport = async (data) => {
        console.log(data)

        const response = await handleSaveReport(data, appointmentId)
        if (response) {
            setOpen(false);
            setAppointments(prev => (prev.map((e) => (e._id == appointmentId ? { ...e, status: 'confirmed' } : e))));
        }

    };


    return (
        <Dialog open={open} setOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-green-600  gap-0 hover:bg-green-700  text-white py-5" onClick={(e) => { setAppointmentId(appointmentId); setOpen(true) }}>
                    <MdDone className="mr-2" /> Confirm
                </Button>
            </DialogTrigger>

            <DialogContent className="w-[95%] max-w-[550px] max-h-[90vh] overflow-auto">
                <form onSubmit={handleSubmit(submitReport)} className="flex flex-col gap-6">
                    <DialogHeader>
                        <DialogTitle>Create Report</DialogTitle>
                        <DialogDescription>
                            create new report for patient that you end of treatment

                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2.5">
                            <Label htmlFor="patientName">Patient Name</Label>

                            <Controller
                                name="patientName"
                                control={control}
                                render={({ field }) => (
                                    <Input type="text" name="patientName" {...field} className="py-6" placeholder="Patient's full name" id="patientName" />

                                )}

                            />
                            {
                                errors.patientName &&
                                <FormErrorMessage message={errors.patientName.message} />
                            }

                        </div>
                        <div className="space-y-2.5">
                            <Label htmlFor="age">Age</Label>
                            <Controller
                                name="age"
                                control={control}
                                render={({ field }) => (
                                    <Input type="number" name="age" {...field} className="py-6" placeholder="Patient's age" id="age" />
                                )}

                            />
                            {
                                errors.age &&
                                <FormErrorMessage message={errors.age.message} />
                            }



                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2.5">
                            <Label htmlFor="reason">Visit Reason</Label>
                            <Controller
                                name="reason"
                                control={control}
                                render={({ field }) => (
                                    <Input type="text" name="reason" className="py-6" {...field} placeholder="why pateint visit you?" id="reason" />
                                )}

                            />
                            {
                                errors.reason &&
                                <FormErrorMessage message={errors.reason.message} />
                            }

                        </div>
                        <div className="space-y-2.5">
                            <Label htmlFor="symptoms">Symptoms</Label>
                            <Controller
                                name="symptoms"
                                control={control}
                                render={({ field }) => (
                                    <Textarea name="symptoms" rows="5" {...field} placeholder="Patient's symptoms" id="symptoms" />
                                )}

                            />
                            {
                                errors.symptoms &&
                                <FormErrorMessage message={errors.symptoms.message} />
                            }

                        </div>

                    </div>
                    {/* Medicins and prescriptions */}

                    <div className="space-y-2.5">
                        <Label htmlFor="prescription">Medicines</Label>
                        <div className="flex items-center gap-3">
                            <Input type="text" name="prescription" value={medicineValue} onChange={(e) => { setMedicineValue(e.target.value) }} className="py-6" placeholder="Medication name" id="prescription" />

                            <Button variant="outline" type="button" size="icon" onClick={() => { setValue('prescriptions', [...getValues("prescriptions"), { medicine: medicineValue, id: Math.floor((Math.random() * 10000000)) }]); setMedicineValue('') }}>
                                <IoIosAddCircle className="size-[1.2rem]" />
                            </Button>

                        </div>
                        {
                            // console.log(getValues("prescriptions"))
                            getValues("prescriptions")?.map((e) => (
                                <div className="flex items-center gap-3" key={e.id}>
                                    <span className="size-2 rounded-full bg-popover-foreground"></span>
                                    <span className="font-light text-popover-foreground">{e.medicine}</span>
                                    <Button type="button" variant="outline" className="size-8" onClick={() => { handleRemoveMedicine(e.id) }}>
                                        <FaTrash className=" text-red-500 size-3 cursor-pointer hover:text-red-700" />
                                    </Button>
                                </div>
                            ))
                        }


                    </div>

                    {/* Medicins and prescriptions */}

                    <div className="space-y-2.5">
                        <Label htmlFor="patientStatus">Patient Status</Label>
                        <Controller
                            name="patientStatus"
                            control={control}
                            render={({ field }) => (

                                <RadioGroup onValueChange={field.onChange} value={field.value} defaultValue="normal" className="flex itmes-center" >
                                    <div className="flex items-center gap-2.5">
                                        <Label htmlFor="option-one flex items-center "> <span className="rounded-full bg-green-500 size-2"></span>Normal</Label>
                                        <RadioGroupItem value="normal" id="option-one" />
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Label htmlFor="option-two flex items-center "> <span className="rounded-full bg-yellow-500 size-2"></span>Stable</Label>
                                        <RadioGroupItem value="stable" id="option-two" />
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Label htmlFor="option-three flex items-center "> <span className="rounded-full bg-red-500 size-2"></span>Dangerous</Label>
                                        <RadioGroupItem value="dangerous" id="option-three" />
                                    </div>

                                </RadioGroup>

                            )}




                        />
                        {
                            errors.patientStatus &&
                            <FormErrorMessage message={errors.patientStatus.message} />
                        }
                    </div>
                    {/* Notes for patient */}
                    <div className="space-y-2.5">
                        <Label htmlFor="notes">Notes For Patient</Label>
                        <div className="flex items-center gap-3">
                            <Input type="text" name="notes" className="py-6" placeholder="Notes" value={noteValue} onChange={(e) => { setNoteValue(e.target.value) }} />
                            <Button variant="outline" type="button" size="icon" onClick={() => { setValue("notesForPatient", [...getValues("notesForPatient"), { note: noteValue, id: Math.floor((Math.random() * 10000000)) }]); setNoteValue('') }}>
                                <IoIosAddCircle className="size-[1.2rem]" />
                            </Button>
                        </div>
                        {

                            getValues("notesForPatient")?.map((e) => (
                                <div className="flex items-center gap-3" key={e.id}>
                                    <span className="size-2 rounded-full bg-popover-foreground"></span>
                                    <span className="font-light text-popover-foreground">{e.note}</span>
                                    <Button type="button" variant="outline" className="size-8" onClick={() => { handleRemoveNote(e.id) }}>
                                        <FaTrash className=" text-red-500 cursor-pointer hover:text-red-700" />
                                    </Button>

                                </div>
                            ))
                        }

                    </div>
                    {/* Notes for patient */}





                    <div className="space-y-2.5">
                        <Label htmlFor="doctorSummary">Doctor's Summary</Label>

                        <Controller
                            name="doctorSummary"
                            control={control}
                            render={({ field }) => (
                                <Textarea rows="5" {...field} placeholder="Appointment summary" id="doctorSummary" />
                            )}
                        />
                        {
                            errors.doctorSummary &&
                            <FormErrorMessage message={errors.doctorSummary.message} />
                        }
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" type="button" onClick={() => { setOpen(false) }}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" >Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>



        </Dialog >
    )
}
export default Report






