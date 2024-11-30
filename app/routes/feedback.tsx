import { Link, useLoaderData } from "@remix-run/react";
import React from 'react';
import FeedbackItem from "~/components/FeedbackItem";
import { RunningText } from "~/components/HeaderRunning";
import { motion } from "framer-motion";
import ButtonItemFeedback from "~/components/ButtonItemFeedback";

export default function Feedback() {
    const variants = {
        exit: { x: "100%", opacity: 0 },
        enter: { x: 0, opacity: 1 },
      };
    return (
    <motion.div 
    initial="exit"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="w-full h-full bg-gray-500">

        <RunningText></RunningText>
        <div className="flex flex-row gap-2 place-content-end text-xs mt-2">
            <p className="me-2">Buruk</p>
            <p className="ms-2 me-1">Kurang</p>
            <p className="ms-2 me-2">Cukup</p>
            <p className="ms-2">Bagus</p>
            <p className="ms-2 me-2">Sempurna</p>
        </div>
        <motion.div 
        className="flex flex-col">
            <FeedbackItem
                iconItem={'🚘'}
                questionItem="Transportasi darat dari & ke bandara"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'🚗'}
                questionItem="Fasilitas parkir"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'🏷️'}
                questionItem="Harga Facilitas parkir"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'🛒'}
                questionItem="Ketersediaan trolley barang bawaan"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'⏳'}
                questionItem="waktu tunggu antrian check-in"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'⌚'}
                questionItem="Keefisienan petugas check-in"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'👩‍💼'}
                questionItem="kesopanan dan kecekatan petugas check-in"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'👮‍♂️'}
                questionItem="Ketelitian pemeriksaan keamanan"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'⌚'}
                questionItem="Waktu tunggu pemeriksaan keamanan"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'🛡️'}
                questionItem="Perasaan aman dan nyaman di bandara"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'🗺️'}
                questionItem="kemudahan menemukan tujuan anda di bandara"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'ℹ️'}
                questionItem="Layar informasi penerbangan"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'🚶‍♂️'}
                questionItem="Jarak jalan kaki di dalam terminal"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'🍽️'}
                questionItem="Fasilitas restoran makan"
            ></FeedbackItem>
            <FeedbackItem
                iconItem={'💲'}
                questionItem="harga fasilitas restoran"
            ></FeedbackItem>
        </motion.div>
        <div className="flex flex-row p-6 justify-between">
            <Link to={'/'}>
                <ButtonItemFeedback
                    bgColorAnimate="#B41220"
                    bgColor="#E22732"
                    valueText="⬅️Kembali"
                    valueFontSize="1rem"
                ></ButtonItemFeedback>
            </Link>
                <ButtonItemFeedback
                    bgColorAnimate="#004ECD"
                    bgColor="#0969FF"
                    valueText="🗑️Kosongkan"
                    valueFontSize="0.8rem"
                ></ButtonItemFeedback>
                <ButtonItemFeedback
                    bgColorAnimate="#00913D"
                    bgColor="#11A84B"
                    valueText="kirim✅"
                    valueFontSize="1rem"
                ></ButtonItemFeedback>
        </div>
    </motion.div>
  );
}