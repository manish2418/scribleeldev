"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  CircularProgress,
  AppBar,
  Toolbar,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import ReplyIcon from "@mui/icons-material/Reply";
import LogoutIcon from "@mui/icons-material/Logout";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function AdminContact() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [replySubject, setReplySubject] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/emails");
      
      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();
      if (response.ok) {
        setEmails(data.emails || []);
      } else {
        setError(data.error || "Failed to fetch emails");
      }
    } catch (error) {
      setError("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedEmail) return;

    try {
      setActionLoading(true);
      const response = await fetch("/api/admin/emails/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedEmail.id }),
      });

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Email deleted successfully");
        setDeleteDialogOpen(false);
        setSelectedEmail(null);
        fetchEmails();
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setError(data.error || "Failed to delete email");
      }
    } catch (error) {
      setError("Failed to delete email");
    } finally {
      setActionLoading(false);
    }
  };

  const handleSendReply = async () => {
    if (!selectedEmail || !replySubject || !replyMessage) {
      setError("Subject and message are required");
      return;
    }

    try {
      setActionLoading(true);
      const response = await fetch("/api/admin/emails/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedEmail.id,
          subject: replySubject,
          message: replyMessage,
        }),
      });

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(`Email sent to ${data.recipient}`);
        setReplyDialogOpen(false);
        setSelectedEmail(null);
        setReplySubject("");
        setReplyMessage("");
        fetchEmails();
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setError(data.error || "Failed to send email");
      }
    } catch (error) {
      setError("Failed to send email");
    } finally {
      setActionLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      router.push("/admin/login");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <AppBar position="static" sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
        <Toolbar>
          <EmailIcon sx={{ marginRight: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard - Waitlist Management
          </Typography>
          <Chip
            label={`${emails.length} Emails`}
            color="secondary"
            sx={{ marginRight: 2 }}
          />
          <IconButton color="inherit" onClick={fetchEmails} title="Refresh">
            <RefreshIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleLogout} title="Logout">
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 3 }}>
        {successMessage && (
          <Alert severity="success" sx={{ marginBottom: 2 }} onClose={() => setSuccessMessage("")}>
            {successMessage}
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }} onClose={() => setError("")}>
            {error}
          </Alert>
        )}

        <Paper elevation={3} sx={{ padding: 3 }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
              <CircularProgress />
            </Box>
          ) : emails.length === 0 ? (
            <Typography variant="h6" align="center" sx={{ padding: 4 }}>
              No emails found
            </Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f0f0f0" }}>
                    <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Date Joined</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Last Replied</TableCell>
                    <TableCell sx={{ fontWeight: 700, textAlign: "center" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {emails.map((email) => (
                    <TableRow key={email.id} hover>
                      <TableCell>{email.email}</TableCell>
                      <TableCell>{formatDate(email.createdAt)}</TableCell>
                      <TableCell>
                        {email.lastRepliedAt
                          ? formatDate(email.lastRepliedAt)
                          : "Never"}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <IconButton
                          color="primary"
                          onClick={() => {
                            setSelectedEmail(email);
                            setReplySubject("");
                            setReplyMessage("");
                            setReplyDialogOpen(true);
                          }}
                          title="Reply"
                        >
                          <ReplyIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => {
                            setSelectedEmail(email);
                            setDeleteDialogOpen(true);
                          }}
                          title="Delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Box>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Email</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete{" "}
            <strong>{selectedEmail?.email}</strong>? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} disabled={actionLoading}>
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
            variant="contained"
            disabled={actionLoading}
          >
            {actionLoading ? <CircularProgress size={20} /> : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={replyDialogOpen}
        onClose={() => setReplyDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Reply to {selectedEmail?.email}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Subject"
            value={replySubject}
            onChange={(e) => setReplySubject(e.target.value)}
            sx={{ marginTop: 2, marginBottom: 2 }}
            required
            disabled={actionLoading}
          />
          <TextField
            fullWidth
            label="Message"
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            multiline
            rows={6}
            required
            disabled={actionLoading}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setReplyDialogOpen(false)} disabled={actionLoading}>
            Cancel
          </Button>
          <Button
            onClick={handleSendReply}
            variant="contained"
            disabled={actionLoading || !replySubject || !replyMessage}
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            {actionLoading ? <CircularProgress size={20} /> : "Send"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}









